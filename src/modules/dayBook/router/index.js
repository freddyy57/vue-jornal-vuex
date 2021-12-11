export default {
  name: 'daybook',
  component: () => import(/* webpackChunkName: "DayBookLayout" */ '../layouts/DayBookLayout'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "NoEntrySelected" */ '../views/NoEntrySelected')
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import(/* webpackChunkName: "EntryView" */ '../views/EntryView')
    }
  ]
}
