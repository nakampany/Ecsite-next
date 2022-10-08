'use strict';

  const stripe = require('stripe')(
    'sk_test_51Lorc2KhXAaqAtkRHRsTZ7elru0zDcMb7dCHL5mOj8XTvxqeGcrEJ7Y2HhjDNoyHu1YCdBbsGrK8Csv9ebHr3e4J003rKaSz96'
    );
module.exports = {
  // orderを通す
    create: async (ctx) => {
      const { address, amount, foods, token } = JSON.parse(ctx.request.body);
      const charge = await stripe.charges.create({
        amount: amount,
        currency: 'jpy',
        source: token,
        description: `${new Date()} ・ ${ctx.state.user._id}`,
      });

    const order = await strapi.services.order.create({
      user: ctx.state.user._id,
      charge_id: charge.id,
      amount: amount,
      address,
      foods,
    });
    return order;
},
};
