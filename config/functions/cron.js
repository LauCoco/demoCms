'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */

module.exports = {
  '*/1 * * * *': async () => {
    console.log('tache cron appelée');
    // fetch articles to publish
    const draftArticleToPublish = await strapi.api.article.services.article.find({
      _publicationState: 'preview',
      published_at: null,
    });

    // update published_at of articles
    draftArticleToPublish.forEach(async article => {
      console.log('article id: ', article.id);
      await strapi.api.article.services.article.update(
        { id: article.id },
        { published_at: new Date() }
      );
    });
  },
};
