import reaction from './icon-reaction.svg';
import memory from './icon-memory.svg';
import verbal from './icon-verbal.svg';
import visual from './icon-visual.svg'
import Card from '@mui/material/Card';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      <Card variant="outlined" className="container">
          <div className="leftBox">
            <h1>Your Result</h1>
            <div className='circle'>
              <h2>76</h2>
              <h3>of 100</h3>
            </div>
            <div className='bold'>Great</div>
            <p>You scored higher than 65% of the people who have taken these test.</p>
          </div>
          <div className='rightBox'>
            <h1>Summary</h1>
            <div className='rightContainer'>
              <div className='row red'>
                <div className='center'>
                  <img src={reaction} alt=''/>
                  <p>Reaction</p>
                </div>
                <p className='textBlack'><span>80</span> / 100</p>
              </div>
              <div className='row yellow'>
                <div className='center'>
                  <img src={memory} alt=''/>
                  <p>Memory</p>
                </div>
                <p className='textBlack'> <span>92</span> / 100</p>
              </div>
              <div className='row green'>
                <div className='center'>
                  <img src={verbal}/>
                  <p>Verbal</p>
                </div>
                <p className='textBlack'><span>61</span> / 100</p>
              </div>
              <div className='row blue'>
                <div className='center'>
                  <img src={visual}/>
                  <p>Visual</p>
                </div>
                <p className='textBlack'><span>72</span> / 100</p>
              </div>
            </div>
            <div className='buttonContainer'>
              <button className='button'>Continue</button>
            </div>
          </div>         
      </Card>
    </div>
  );
}

export default App;
