interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  for(let [subject,score] of Object.entries(update.scores)){
    const subjects = store.find((store)=> subject === store.subject);

    if(!subjects){
      store.push({subject: subject,students: [{name: update.name,score}]})
    }else{
      const student = subjects.students.find(student=> student.name === update.name);
      if(!student){
        subjects.students.push({name : update.name , score})
      }else{
        student.score = score;
      }
    }
  }
  return store
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  const dataSubject = store.find(e => e.subject === record.subject);
  dataSubject.students.forEach((student,index) =>{
    if(student.name === record.name){
      dataSubject.students.splice(index,1)
    }
  })
  return store
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  return store.reduce((prev,cur) => {
      if(subjects.includes(cur.subject)){
        for (const student of cur.students) {
          const studentExist = prev.find(per => per.name === student.name)
          if(studentExist){
            studentExist[cur.subject] = student.score;
          }else{
           const newStudent = { name : student.name }
            for(const subject of subjects){
                newStudent[subject] = null;
            }
            newStudent[cur.subject] = student.score || null;
            prev.push(newStudent)
          }
      }
    }
    return prev
  },[])
}
