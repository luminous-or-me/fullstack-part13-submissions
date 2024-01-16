CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes integer DEFAULT 0
);

insert into blogs (author, url, title, likes) values (
    'Dan Abramov',
    'https://overreacted.io/on-let-vs-const/',
    'On let vs const',
    2
);

insert into blogs (author, url, title) values (
    'Laurenz Albe',
    'https://www.cybertec-postgresql.com/en/gaps-in-sequences-postgresql/',
    'Gaps in sequences in PostgreSQL'
);