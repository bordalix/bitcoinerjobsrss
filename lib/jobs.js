export async function getJobs() {
  const api = 'https://bitcoinerjobs.com/api/jobs?'
            + 'jobtype=all&category=all&secondary_category=all&'
            + 'location=all&company=all&remote_ok=false&'
            + 'tags=%5B%5D&keyword=&limit=45&page=1'
  const res = await fetch(api)
  const data = await res.json()
  return data.jobs
}
