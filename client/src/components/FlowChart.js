import React, { useEffect } from 'react';
import createEngine, {
  DiagramModel,
  DefaultNodeModel,
  DefaultLinkModel
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import '@projectstorm/react-diagrams/dist/style.min.css';

const FlowChart = ({ explanation }) => {
  const [engine, setEngine] = React.useState(null);

  useEffect(() => {
    if (!explanation) return;

    const engine = createEngine();
    const model = new DiagramModel();

    // Basic demo nodes - you can enhance with real NLP later
    const nodes = explanation
      .split('\n')
      .filter(line => line.trim() && line.length < 120)
      .slice(0, 5)
      .map((text, idx) => {
        const node = new DefaultNodeModel({
          name: `Step ${idx + 1}`,
          color: 'rgb(0,192,255)',
        });
        node.addOutPort('→');
        node.setPosition(100 + idx * 200, 100);
        node.getOptions().extras = { text };
        return node;
      });

    // Add nodes to model
    nodes.forEach(node => model.addNode(node));

    // Link them sequentially
    for (let i = 0; i < nodes.length - 1; i++) {
      const link = new DefaultLinkModel();
      link.setSourcePort(nodes[i].getOutPorts()[0]);
      link.setTargetPort(nodes[i + 1].getInPorts()[0]);
      model.addLink(link);
    }

    engine.setModel(model);
    setEngine(engine);
  }, [explanation]);

  if (!engine) return null;

  return (
    <div className="h-[400px] bg-gray-900 rounded-lg mt-6 shadow-lg">
      <CanvasWidget className="w-full h-full" engine={engine} />
    </div>
  );
};

export default FlowChart;
