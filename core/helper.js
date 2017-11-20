// makeAction: Create new redux action
const makeAction = (type, payload) => ({
  type,
  payload,
})

// insertInterviewAction: Redux action
export const insertInterviewAction = data =>
  makeAction('INSERT_INTERVIEW_DATA', data)

// majorString: Convert number to readable string
export const majorToString = major => {
  const majorString = ['Web Content', 'Web design', 'Web Marketing', 'Web Programming']
  return majorString[major - 1]
}

// findInterviewCode: find candidate interview code
export const findInterviewCode = (name, candidate) => {
  candidate = candidate.filter(x => `${x.firstName} ${x.lastName}` === name)
  if (candidate.length > 0) {
    return candidate[0].interviewRef
  }
  return ''
}

// checkCandidate: check if candidate pass or fail
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
