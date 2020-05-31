import * as React from 'react'
import { render } from 'react-dom'

interface IAppProps {}
interface IAppState {}

class AppTest extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div>
        这是typescript了哦~
      </div>
    )
  }
}

export default AppTest;