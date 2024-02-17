// Assuming React, ReactDOM, and other dependencies are globally available through the CDNs

const HtmlOverlay = () => {
    return <Html>
        <div className="w-full">

        </div>
    </Html>
}

function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <HtmlOverlay />
        </Canvas>
    );
}

ReactDOM.render(<App />, document.getElementById('canvas-container'));
