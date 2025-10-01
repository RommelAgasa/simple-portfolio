import './App.css'
import ProfileImage from './components/profile_image'
import Introduction from './components/introduction'
import Interest from './components/interest'
import Freelancer from './components/freelancer'
import DesignTools from './components/design-tools'
import EditingTools from './components/editing-tools'
import Languages from './components/languages'
import Academic from './components/academic'
import Portfolio from './components/portfolio'
import Details from './components/details'

function App() {

  return (
    <>
      <div className='p-6 md:p-9 flex flex-col gap-8'>

        <div className='flex flex-wrap lg:flex-nowrap gap-4 md:gap-8'>
          <div>
            <ProfileImage />
          </div>
          <div className='grid gap-2 md:gap-4'>
              <div>
                <Introduction />
              </div>
              <div>
                <Interest />
              </div>
          </div>
        </div>

        {/* <div className='grid grid-cols-2 gap-8'>
          <Freelancer company="Freelancer" role="Logo/Brand Designer" duration="2019 - Present">
            <div>
                <ul className="list-disc list-inside p-4 leading-8">
                    <li>Worked on diverse logo and brand identity projects.</li>
                    <li>Collaborated with clients from multiple countries.</li>
                    <li>Developed a versatile designs skill set.</li>
                    <li>Adapted to unique challenges and requirements.</li>
                </ul>
            </div>
          </Freelancer>
          <Freelancer company="Meetzed" role="Graphic Designer" duration="2020 - 2021">
            <div>
                <ul className="list-disc list-inside p-4 leading-8">
                  <li>Collaboration: Supported Lead Designer on projects.</li>
                  <li>Branding: Crafted unique brand identities.</li>
                  <li>Tools: Used Illustrator, Photoshop, & InDesign</li>
                </ul>
            </div>
          </Freelancer>
        </div>

        <div className='grid grid-cols-2 gap-8'>
          <div className='grid grid-rows-3 gap-10'>
            <DesignTools />
            <EditingTools />
            <Languages />
          </div>
          <Academic />
        </div>

        <div>
          <Portfolio/>
        </div>

        <div>
          <Details/>
        </div> */}
      </div>
    </>
  )
}

export default App
