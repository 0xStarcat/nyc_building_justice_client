import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapPage from './Pages/MapPage'
import ContentPage from './Pages/ContentPage'
import AboutContent from './Pages/ContentPage/Content/AboutContent'
import StoryContent from './Pages/ContentPage/Content/StoryContent'
import SupportContent from './Pages/ContentPage/Content/SupportContent'
import LandingPage from './Pages/LandingPage'
import { readCensusTracts } from './Store/CensusTracts/actions'
import { checkOrientation } from './Store/AppState/actions'

import { history } from './Store/store'
import { Router, Switch, Route } from 'react-router'

import './App.scss'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(readCensusTracts())

    this.checkOrientation = this.checkOrientation.bind(this)
  }

  checkOrientation() {
    this.props.dispatch(checkOrientation())
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkOrientation)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkOrientation)
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={router => <MapPage router={router} />} />
            <Route
              exact
              path="/about"
              render={router => <LandingPage landscapeOrientation={this.props.landscapeOrientation} router={router} />}
            />
            <Route
              exact
              path="/story"
              render={router => (
                <ContentPage landscapeOrientation={this.props.landscapeOrientation} router={router}>
                  <StoryContent />
                </ContentPage>
              )}
            />
            <Route
              exact
              path="/support"
              render={router => (
                <ContentPage landscapeOrientation={this.props.landscapeOrientation} router={router}>
                  <SupportContent />
                </ContentPage>
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    landscapeOrientation: state.appState.landscapeOrientation
  }
}

export default connect(mapStateToProps)(App)
