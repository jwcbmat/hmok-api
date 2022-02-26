create schema hmok;

create table hmok.post (
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
);