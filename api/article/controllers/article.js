'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOnlyArticles(ctx) {
        let entities;
        let response = {};
        entities = await strapi.services.article.find(ctx.query);
        entities = entities.filter(obj => obj.video.length === 0);
        response.liste = entities.map(obj => obj.titre);
        return response;
      },
};
