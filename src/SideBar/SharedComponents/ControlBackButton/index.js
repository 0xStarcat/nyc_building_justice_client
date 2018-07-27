import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPE_MENU,
  SIDEBAR_VIEW_BUILDING_LAYER_MENU,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../../Store/AppState/actions'

import SwitchViewButton from '../../SharedComponents/SwitchViewButton'
import { RightArrow } from '../../../SharedStyles/icons'

const ControlBackButton = props => {
  const getBackView = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_BOUNDARY_LAYER_MENU
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        return SCOPE_CENSUS_TRACTS
      default:
        return appState.sidebarScope
    }
  }

  const disabled =
    props.appState.sidebarView === SIDEBAR_VIEW_BOUNDARY_LAYER_MENU ||
    props.appState.sidebarView === SIDEBAR_VIEW_SCOPE_MENU ||
    props.appState.sidebarView === SIDEBAR_VIEW_BUILDING_LAYER_MENU

  return (
    <SwitchViewButton
      className={`back-button control-button ${disabled ? 'disabled-button' : ''} ${props.className}`}
      disabled={disabled}
      scopeSwitch={getBackScope()}
      viewSwitch={getBackView()}
    >
      <div className={`control-icon-container round button-border-left ${disabled ? 'hidden-svg' : ''}`}>
        <RightArrow className="svg-flip" />
      </div>
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  appState: PropTypes.object
}

export default ControlBackButton
