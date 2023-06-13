---
title: 'Moving the site'
date: '2023-01-25'
---

Happy new year! As a present to myself, and as part of building the website for our
wedding, I've migrated the website from the Vercel hosted offering to DigitalOcean.
If I'm honest, a large part of that was driven by a desire to learn more and have
some practical experience using kubernetes. It may cost a bit more, but hey, it's
an investment into my own learning.

So now there are three kubernetes deployments - this main site, the photos site, and
the wedding website. In front of that, there's an nginx ingress that forwards to
the services, allowing me to use different subdomains for each site. I've also gotten
round to using GitHub Actions for continuous deployment, so and changes to the main
branch cause docker images to be built and pushed, and the kubernetes deployment
definition to be updated with the new image tag, and applied.

I'll probably dig a little deeper into this in a future post, but wanted to record
this small victory. There's still a lot more I'd like to do here, especially on
the photos side now that's been separated. I've also got a wedding to plan, though, so
we'll see if I manage to crack out any updates before that.
