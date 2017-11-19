const makeAction = (type, payload) => ({
  type,
  payload,
})

export const insertInterviewAction = data =>
  makeAction('INSERT_INTERVIEW_DATA', data)

export const checkCandidate = (name, major, candidate) => {
  const majorString = ['content', 'design', 'marketing', 'programming']
  candidate = candidate.filter(x => `${x.firstName} ${x.lastName}` === name)
  if (candidate.length === 0) {
    return false
  } else {
    if (candidate[0].major === majorString[major - 1]) {
      return true
    }
    return false
  }
}
