// Assuming React, ReactDOM, and other dependencies are globally available through the CDNs

function Ball() {
    const meshRef = useRef();

    // Optional: simple animation to rotate the ball
    useFrame(() => {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} /> {/* args = [radius, widthSegments, heightSegments] */}
            <meshStandardMaterial color="royalblue" />
        </mesh>
    );
}

const HtmlOverlay = () => {
    return <Html>
        <div className="w-full">
            This is a test
        </div>
    </Html>
}

function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <HtmlOverlay />
            <Ball />
        </Canvas>
    );
}

ReactDOM.render(<App />, document.getElementById('canvas-container'));
