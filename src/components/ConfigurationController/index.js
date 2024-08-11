import ConfiguratonContext from '../..context/Configuration'

import './index.css'

const ConfigurationController = () => (
   <ConfiguratonContext.Consumer>
     {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,  
        } = value
        const onChangeContent = () => {
          onToggleShowContent()  
        }
        const onChangeLeftNavbar = event => {
          onToggleShowLeftNavbar(event.target.value)  
        }
        const onChangeRightNavbar = event => {
          onChangeRightNavbar(event.target.value)  
        }

        return (
          <div className="configuration-controls-container">
            <div className="responsive-controls-container">
              <h1 className="layout-heading">Layout</h1>
              <div className="checkbox-group">
                <div className="checkbox-container">
                  <input
                    checked={showContent}
                    onChange={onChangeContent}
                    type="checkbox"
                    id="content"
                  />
                  <label className="label-text" htmlFor="content">
                    Content
                  </label>  
                </div>
                <div className="checkbox-container">
                  <input
                    checked={showLeftNavbar}
                    onChange={onChangeLeftNavbar}
                    type="checkbox"
                    id="leftNavbar"
                  />
                  <label className="label-text" htmlFor="leftNavbar">
                    Left Navbar
                  </label>  
                </div>
                <div className="checkbox-container">
                  <input
                    checked={showRightNavbar}
                    onChange={onChangeRightNavbar}
                    type="checkbox"
                    id="rightNavbar"
                  />
                  <label className="label-text" htmlFor="rightNavbar">
                    Right Navbar
                  </label>  
                </div>
              </div>
            </div>
          </div>  
        )
     }}  
   </ConfiguratonContext.Consumer>
)

export default ConfigurationController
