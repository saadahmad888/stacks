import './App.css';
import Card from './components/Card';
import Outer from './components';

function App() {
  return (
    <div className="mian-box">
      <div className="heading-box">
        <h1>
          Stack on Scroll
        </h1>
        <a href="">
          <a href='https://blog.olivierlarose.com/tutorials/cards-parallax'>Blog Link of card paralax</a>
        </a>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Urna dapibus taciti mollis neque himenaeos suscipit sem egestas? Commodo torquent hendrerit ante venenatis cursus torquent. Aptent pretium senectus eros aliquet odio potenti. Dapibus hac vel justo conubia turpis. Odio dapibus augue taciti integer ad risus etiam. Ex fringilla dictum tortor ipsum suscipit. Phasellus eros faucibus ridiculus vehicula mauris at rutrum per gravida. Class vivamus suspendisse viverra nascetur rhoncus enim per. <br/><br/>

          Himenaeos amet imperdiet tristique tempus ante pretium elementum eget elit. Pretium enim vel montes potenti imperdiet iaculis ligula potenti. Dui pulvinar adipiscing finibus potenti orci praesent ultrices. Nulla per vulputate semper malesuada pulvinar hac class? Quis eros dignissim blandit est; elementum eros convallis. Nibh varius lobortis proin et lobortis ut sagittis ex. <br/><br/>

          Lectus aptent himenaeos ligula aptent dapibus nascetur magnis donec. Inceptos porta ultricies posuere, dictumst imperdiet ac. Hendrerit gravida maximus integer sit; quam justo mattis bibendum curabitur. Blandit laoreet at nullam placerat montes conubia. Parturient dignissim malesuada ornare a sed aliquam condimentum. Id mollis praesent ligula leo fusce lacinia maximus class. Sodales enim parturient efficitur blandit eleifend etiam. <br/><br/>

          Habitasse molestie maecenas ipsum vitae sodales hendrerit imperdiet. Enim facilisis accumsan rutrum; habitasse volutpat sit netus aptent. Magna dolor ultrices est vulputate aliquam auctor volutpat. Etiam cras purus gravida, fusce interdum lobortis nulla. Semper venenatis iaculis eu ut fusce fusce pharetra eleifend. Fames vivamus pellentesque tincidunt felis vestibulum nullam et sem. <br/><br/>

          Dictumst orci phasellus justo risus odio fringilla purus aliquam aliquet. Aenean molestie class purus taciti elit. Arcu ipsum class phasellus, in bibendum accumsan quisque. Ipsum facilisi lorem ligula fringilla suscipit. Taciti integer libero inceptos bibendum mauris cras taciti tempus ultrices. Ipsum proin cubilia; libero sit eu commodo erat. Feugiat nisi suscipit litora dolor vehicula. Commodo rhoncus rhoncus; elementum felis habitant a vestibulum. <br/><br/>
        </p>
      </div>
      <div className="App">
        <Outer>
          <Card index={1}>
            <img style={{width: "60%", height: "600px", borderRadius: "20px", margin: "0 auto" }} src="/images/1.jpg" alt="" />
          </Card>
          <Card index={2}>
            <img style={{width: "60%", height: "600px", borderRadius: "20px", margin: "0 auto" }} src="/images/2.jpg" alt="" />
          </Card>
          <Card index={3}>
            <img style={{width: "60%", height: "600px", borderRadius: "20px", margin: "0 auto" }} src="/images/3.jpg" alt="" />
          </Card>
          <Card index={4}>
            <img style={{width: "60%", height: "600px", borderRadius: "20px", margin: "0 auto" }} src="/images/4.jpg" alt="" />
          </Card>
        </Outer>
      </div>
      <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Urna dapibus taciti mollis neque himenaeos suscipit sem egestas? Commodo torquent hendrerit ante venenatis cursus torquent. Aptent pretium senectus eros aliquet odio potenti. Dapibus hac vel justo conubia turpis. Odio dapibus augue taciti integer ad risus etiam. Ex fringilla dictum tortor ipsum suscipit. Phasellus eros faucibus ridiculus vehicula mauris at rutrum per gravida. Class vivamus suspendisse viverra nascetur rhoncus enim per. <br/><br/>

          Himenaeos amet imperdiet tristique tempus ante pretium elementum eget elit. Pretium enim vel montes potenti imperdiet iaculis ligula potenti. Dui pulvinar adipiscing finibus potenti orci praesent ultrices. Nulla per vulputate semper malesuada pulvinar hac class? Quis eros dignissim blandit est; elementum eros convallis. Nibh varius lobortis proin et lobortis ut sagittis ex. <br/><br/>

          Lectus aptent himenaeos ligula aptent dapibus nascetur magnis donec. Inceptos porta ultricies posuere, dictumst imperdiet ac. Hendrerit gravida maximus integer sit; quam justo mattis bibendum curabitur. Blandit laoreet at nullam placerat montes conubia. Parturient dignissim malesuada ornare a sed aliquam condimentum. Id mollis praesent ligula leo fusce lacinia maximus class. Sodales enim parturient efficitur blandit eleifend etiam. <br/><br/>

          Habitasse molestie maecenas ipsum vitae sodales hendrerit imperdiet. Enim facilisis accumsan rutrum; habitasse volutpat sit netus aptent. Magna dolor ultrices est vulputate aliquam auctor volutpat. Etiam cras purus gravida, fusce interdum lobortis nulla. Semper venenatis iaculis eu ut fusce fusce pharetra eleifend. Fames vivamus pellentesque tincidunt felis vestibulum nullam et sem. <br/><br/>

          Dictumst orci phasellus justo risus odio fringilla purus aliquam aliquet. Aenean molestie class purus taciti elit. Arcu ipsum class phasellus, in bibendum accumsan quisque. Ipsum facilisi lorem ligula fringilla suscipit. Taciti integer libero inceptos bibendum mauris cras taciti tempus ultrices. Ipsum proin cubilia; libero sit eu commodo erat. Feugiat nisi suscipit litora dolor vehicula. Commodo rhoncus rhoncus; elementum felis habitant a vestibulum. <br/><br/>
        </p>
        <p className="copyright">
          © All Rights are Reserved by <a target='_blank' href='https://isaadahmad.com'>Saad Ahmad</a>
        </p>
    </div>
  );
}

export default App;
