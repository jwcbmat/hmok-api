test('Should get posts', async () => {
    const post = {
        title: 'im a title',
        context: 'heyy, im a text'
    };
    expect(post.title.length).toBe(10);
}); 