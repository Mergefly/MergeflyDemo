/* eslint no-void: [0] */
import React from 'react';
import SplitterLayout from '../../../index';

class HorizontalLayoutWithEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondaryPaneSize: -1,
      dragging: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.secondaryPaneSize !== this.state.secondaryPaneSize && this.sizeEl1 && this.sizeEl2) {
      this.sizeEl1.classList.add('highlight');
      this.sizeEl2.classList.add('highlight');
      void this.sizeEl1.offsetWidth;
      void this.sizeEl2.offsetWidth;
      this.sizeEl1.classList.remove('highlight');
      this.sizeEl2.classList.remove('highlight');
    }

    if (prevState.dragging !== this.state.dragging && this.draggingEl1 && this.draggingEl2) {
      this.draggingEl1.classList.add('highlight');
      this.draggingEl2.classList.add('highlight');
      void this.draggingEl1.offsetWidth;
      void this.draggingEl2.offsetWidth;
      this.draggingEl1.classList.remove('highlight');
      this.draggingEl2.classList.remove('highlight');
    }
  }

  onDragEnd = () => {
    this.setState({ dragging: false });
  }

  onSecondaryPaneSizeChange = (secondaryPaneSize) => {
    this.setState({ secondaryPaneSize });
  }

  onDragStart = () => {
    this.setState({ dragging: true });
  }

  render() {
    return (
      <SplitterLayout
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onSecondaryPaneSizeChange={this.onSecondaryPaneSizeChange}
      >
        <div className="my-pane">
          <p>This is the 1st pane, and this is the primary pane by default.</p>
          <p>Dragging:
            <span className="volatile" ref={(e) => { this.draggingEl1 = e; }}>
              {this.state.dragging ? 'Yes' : 'No'}
            </span>
          </p>
          <p>Size of the 2nd pane:
            <span className="volatile" ref={(e) => { this.sizeEl1 = e; }}>
              {this.state.secondaryPaneSize}
            </span>
          </p>
          <h2>1st Pane</h2>
        </div>
        <div className="my-pane">
          <p>Dragging:
            <span className="volatile" ref={(e) => { this.draggingEl2 = e; }}>
              {this.state.dragging ? 'Yes' : 'No'}
            </span>
          </p>
          <h2>2nd Pane</h2>
          <p>This is the 2nd pane, and this is the secondary pane by default.</p>
          <p>Size of this pane:
            <span className="volatile" ref={(e) => { this.sizeEl2 = e; }}>
              {this.state.secondaryPaneSize}
            </span>
          </p>
        </div>
      </SplitterLayout>
    );
  }
}

export default HorizontalLayoutWithEvents;