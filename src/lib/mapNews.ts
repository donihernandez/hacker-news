const mapNews = (news: any) => {
    return news.map((newsItem: any) => {
        return {
            author: newsItem.author,
            date: newsItem.created_at,
            id: newsItem.story_id,
            title: newsItem.story_title,
            url: newsItem.story_url,
        };
    });
};

export { mapNews };
