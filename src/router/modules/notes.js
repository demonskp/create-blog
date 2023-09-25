export default [
  {
    path: "/notes",
    component: () => import("@/views/notes/layout.vue"),
    children:[
      {
        path: '/notes',
        name: 'notes-list',
        component: () => import("../../views/notes/list/index.vue"),
      },
      {
        path: '/notes/detail/:id',
        name: 'notes-detail',
        component: () => import("../../views/notes/detail/index.vue"),
      }
    ]
  },
];
