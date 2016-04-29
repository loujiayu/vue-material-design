import {
  ButtonView,
  IconButtonView,
  CheckBoxView,
  DownMenuView,
  IconMenuView,
  MenuBarView,
  RadioView,
  SnackBarView,
  TextFieldView,
  TableView,
  ToggleView,
  AutoCompleteView } from './components'

export default function configRouter (router) {
  // normal routes
  router.map({
    '/components/button': {
      component: ButtonView
    },
    '/components/iconbutton': {
      component: IconButtonView
    },
    'components/checkbox': {
      component: CheckBoxView
    },
    'components/downmenu': {
      component: DownMenuView
    },
    'components/iconmenu': {
      component: IconMenuView
    },
    'components/menubar': {
      component: MenuBarView
    },
    'components/radio': {
      component: RadioView
    },
    'components/snackbar': {
      component: SnackBarView
    },
    'components/textfield': {
      component: TextFieldView
    },
    'components/table': {
      component: TableView
    },
    'components/toggle': {
      component: ToggleView
    },
    'components/autocomplete': {
      component: AutoCompleteView
    }
  })
}
