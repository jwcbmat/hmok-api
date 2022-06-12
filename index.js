const express = require('express')
const app = express()
const port = 3000

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    const getAuthor = prisma.author.findUnique({
        where: {
            id: 1,
        },
        select: {
            name: true,
            posts: {
                select: {
                    title: true,
                },
            },
        },
    })
    res.send(getAuthor)
})

app.get('/posts', (req, res) => {
    res.send("OI GRUTZ <3")
})

app.listen(port)