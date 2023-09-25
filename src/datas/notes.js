export const notes = [
  {
    id: '1',
    title: '一个神奇的问题',
    description: `在改之前旧代码的时候(jquery)，碰到了一个神奇的问题。某个上传的功能，唯独在测试那里，无法使用会报一个json解析的错误。一看代码发现会parseJSON一个字符串，这么看完全没问题`,
    createTime: '2021.08.30',
    tags: ['问题'],
    component: ()=>import("@/assets/markdown/一个神奇的问题.md"),
    poster: '',
  },
  {
    id: '2',
    title: 'elementUI踩坑',
    description: `因为同一页面下写了多个表单，我需要对所有表单都进行校验无误后再向后台发起请求。而当我通过form的validate方法去校验时，发现其返回的promise永远都停留在pending状态，不会结束。`,
    createTime: '2021.12.31',
    tags: ['问题', 'element-ui'],
    component: ()=>import("@/assets/markdown/elementUI踩坑.md"),
    poster: "/src/assets/markdown/img/elementUI-form组件状态透传.png",
  }
].reverse();

const map = {};

notes.forEach((item)=>{
  if(!notes[item.id]) {
    map[item.id] = item;
  }
})

export const notesMap = map;