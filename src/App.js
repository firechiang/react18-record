import './App.css';
import Board from "./components/Board";
import UseImmerTest from './components/UseImmerTest';
import { ReducerTest } from './components/ReducerTest';
import { ContextTest } from './components/context-test/ContextTest';
import { ChildrenTest } from './components/children-test/ChildrenTest';
import { RefTest } from './components/ref-test/RefTest';
import { EffectTest } from './components/effect-test/EffectTest';
import { MemoTest } from './components/memo-test/MemoTest';
import { SyncExternalStoreTest } from './components/SyncExternalStoreTest/SyncExternalStoreTest';
import { EffectEventTest } from './components/effect-event-test/EffectEventTest';
import { CustomHook } from './components/customHook/CustomHook';
import { CallBackTest } from './components/callback-test/CallBackTest';
import {ImperativeHandleTest} from './components/imperative-handle-test/ImperativeHandleTest';
import { LazyTest } from './components/lazy-test/LazyTest';
import { DeferredValueTest } from './components/deferred-value-test/DeferredValueTest';
import { TransitionTest } from './components/transitio-test/TransitionTest';
import { Motest } from './components/mo-test/Motest';
function App() {
  return (
    <div>
        <div>
             <Board/>  
        </div>
        <div>
            <UseImmerTest/>
        </div>
        <div>
            <ReducerTest/>
        </div>
        <div>
            <ContextTest/>
        </div>
        <div>
	        <ChildrenTest/>
        </div>
        <div>
	        <RefTest/>
        </div>
        <div>
	        <EffectTest/>
        </div>
        <div>
	        <EffectEventTest/>
        </div>
        <div>
	        <MemoTest/>
        </div>
        <div>
	        <SyncExternalStoreTest/>
        </div>
        <div>
	        <CustomHook/>
        </div>
        <div>
	        <CallBackTest/>
        </div>
        <div>
	        <ImperativeHandleTest/>
        </div>
        <div>
	        <LazyTest/>
        </div>
        <div>
	        <DeferredValueTest/>
        </div>
        <div>
	        <TransitionTest/>
        </div>
        <div>
	        <Motest/>
        </div>
    </div>
  );
}

export default App;
