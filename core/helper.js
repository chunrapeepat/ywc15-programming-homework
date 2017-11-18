const makeAction = (type, payload) => ({
  type,
  payload,
})

export const insertInterviewAction = data =>
  makeAction('INSERT_INTERVIEW_DATA', data)
