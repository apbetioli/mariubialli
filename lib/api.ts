export const getCourses = async (skip?: number, take = 10) => {
  const params = new URLSearchParams()
  if (skip) params.set('skip', String(skip))
  if (take) params.set('take', String(take))

  const res = await fetch(`/api/courses?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (res.ok) {
    return await res.json()
  }
}
