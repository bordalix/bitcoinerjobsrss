const generateRssItem = (item) => {
  const date = item.created_at
  const link = `https://bitcoinerjobs.co/job/${item.id}-${item.slug}-${item.company_slug}`
  const title = item.title_with_company + ' // '
              + item.location_name + ' // '
              + (item.is_remote ? 'Remote' : 'Office')
  return `
        <item>
          <guid>${link}</guid>
          <title><![CDATA[${title}]]></title>
          <link>${link}</link>
          <pubDate>${new Date(date).toUTCString()}</pubDate>
        </item>
  `
}

export function generateRssFeed(jobs) {
  const desc = 'We Are Bitcoiners, We Are Satoshi'
  const items = jobs.map(generateRssItem).join('')
  const self = 'https://bitcoinerjobsrss.vercel.app/api/rss'
  const title = 'Bitcoiner Jobs'
  const url = 'https://bitcoinerjobs.co'
  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${title}</title>
        <link>${url}</link>
        <description>${desc}</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${self}" rel="self" type="application/rss+xml"/>
        ${items}
      </channel>
    </rss>
  `
}
