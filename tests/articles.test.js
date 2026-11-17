import assert from 'node:assert/strict';
import test from 'node:test';
import { onRequestGet } from '../functions/api/articles.js';

function createDatabase(results) {
  const calls = { sql: null, all: false };
  return {
    calls,
    prepare(sql) {
      calls.sql = sql;
      return {
        async all() {
          calls.all = true;
          return { results };
        },
      };
    },
  };
}

test('GET articles returns featured articles with the public cache header', async () => {
  const articles = [
    {
      id: 1,
      slug: 'spring-planting',
      title: 'Spring planting',
      excerpt: 'A guide to spring planting.',
      category: 'Seasonal',
      image: 'Tulip',
      readTime: '8 min read',
      publishedAt: '2026-03-01',
    },
  ];
  const database = createDatabase(articles);

  const response = await onRequestGet({ env: { GARDEN_DB: database } });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), articles);
  assert.equal(response.headers.get('Cache-Control'), 'public, max-age=300');
  assert.equal(database.calls.all, true);
  assert.match(database.calls.sql, /WHERE\s+featured\s*=\s*1/);
  assert.match(database.calls.sql, /ORDER BY\s+published_at DESC, id DESC/);
  assert.match(database.calls.sql, /LIMIT 4/);
  assert.match(database.calls.sql, /read_time AS readTime/);
  assert.match(database.calls.sql, /published_at AS publishedAt/);
});

test('GET articles returns an empty JSON array when no articles are featured', async () => {
  const response = await onRequestGet({ env: { GARDEN_DB: createDatabase([]) } });

  assert.deepEqual(await response.json(), []);
  assert.match(response.headers.get('Content-Type'), /application\/json/);
});

test('GET articles propagates database errors for the runtime to handle', async () => {
  const failure = new Error('database unavailable');
  const database = {
    prepare() {
      return { all: async () => { throw failure; } };
    },
  };

  await assert.rejects(
    onRequestGet({ env: { GARDEN_DB: database } }),
    (error) => error === failure,
  );
});
