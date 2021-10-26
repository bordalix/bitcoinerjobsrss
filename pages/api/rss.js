import { generateRssFeed } from '../../lib/rss';
import { getJobs } from '../../lib/jobs';

export default async function handler(req, res) {
  try {
    const jobs = await getJobs()
    res.status(200).json(generateRssFeed(jobs))
  } catch(error) {
    console.log(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
}
