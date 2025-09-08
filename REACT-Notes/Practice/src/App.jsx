import CarSeter from "./Practices/UseStateHook/CarChanger";
import MyCheckbox from "./Practices/UseStateHook/CheckBox";
import ColorChanger from "./Practices/UseStateHook/ColorChanger";
import CounterState from "./Practices/UseStateHook/Counter";
import MyComponent from "./Practices/UseStateHook/MyComponent";
import MyInput from "./Practices/UseStateHook/TextField";

import CounterRef from "./Practices/UseRefHook/Counter";
import Input from "./Practices/UseRefHook/Input";
import VideoPlayer from "./Practices/UseRefHook/VideoPlayer";

import CounterEffect from "./Practices/UseEffectHook/Counter";
import HandMove from "./Practices/UseEffectHook/HandMove"
import MyEffectComponent from "./Practices/UseEffectHook/MyComponent";
import MyEffectComponent2 from "./Practices/UseEffectHook/MyComponent2";

import MyApp from "./Practices/UsesContextHook/Contact";

import CounterMemo from "./Practices/UseMemoHook/Counter";

import MainPage from "./Practices/UseCallbackHook/MainPage";
import CounterReducer from "./Practices/UseReducerHook/Counter";

function App() {
  return (
    <>
      <main>
        {/* -------UseStateHook------ */}
        <ColorChanger />
        <hr className="my-4" />
        <CarSeter />
        <hr className="my-4" />
        <MyComponent />
        <hr className="my-4" />
        <MyCheckbox />
        <hr className="my-4" />
        <MyInput />
        <hr className="my-4" />
        <CounterState />
        <hr className="my-2" />
        {/* --------UseRefHook------- */}
        <hr className="my-2" />
        <CounterRef />
        <hr className="my-4" />
        <Input />
        <hr className="my-4" />
        <VideoPlayer />
        <hr className="my-2" />
        {/* --------UseEffectHook------- */}
        <hr className="my-2" />
        <CounterEffect />
        <hr className="my-4" />
        <HandMove/>

        <MyEffectComponent />
        <hr className="my-4" />
        <MyEffectComponent2 />
        <hr className="my-2" />
        {/* --------UseContextHook------- */}
        <hr className="my-2" />
        <MyApp />

        <hr className="my-2" />
        {/* --------UseMemoHook------- */}
        <hr className="my-2" />
        <CounterMemo />
        <hr className="my-2" />

        {/* --------UseCallbackHook------- */}
        <hr className="my-2" />
        <MainPage />
        <hr className="my-2" />

        {/* --------UseReducerHook------- */}
        <hr className="my-2" />
        <CounterReducer />
        <hr className="my-2" />
      </main>
    </>
  );
}

export default App;
