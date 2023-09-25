import One from '@/assets/makedown/一个神奇的问题.md'


export const notes = [
  {
    id: '1',
    title: '一个神奇的问题',
    description: `在改之前旧代码的时候(jquery)，碰到了一个神奇的问题。某个上传的功能，唯独在测试那里，无法使用会报一个json解析的错误。`,
    createTime: '2022.07.03',
    tags: ['问题'],
    component: One,
  }
]

const map = {};

notes.forEach((item)=>{
  if(!notes[item.id]) {
    map[item.id] = item;
  }
})

export const notesMap = map;