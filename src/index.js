import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Card, Label, Icon, Divider,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import './style.css';

class Timeline extends Component {
  render() {
    const {
      direction, icon, title, time, description, tags, labelColor, lineHeight = 4, lineColor = 'grey', color = 'grey'
    } = this.props;
    const textAlign = direction === 'left' ? 'right' : 'left';
    const card = (
        <Card fluid raised color={color}>
          <Card.Content>
            <Label pointing={textAlign} color={labelColor} attached="top" style={{ marginLeft: '0' }}>
              {time}
            </Label>
            <Card.Header>
              {title}
            </Card.Header>
            <Card.Description>
              {description}
            </Card.Description>
            <Divider />
            <Label.Group color={color}>
              {tags.map((tag, i) => (
                <Label key={i.toString()}>
                  {tag}
                </Label>
              ))}
            </Label.Group>
          </Card.Content>
        </Card>
    );

    const left = direction === 'left' ? card : '';
    const right = direction === 'right' ? card : '';
    const isMobile = window.innerWidth <= 768;
    const iconSize = isMobile ? 'small' : 'large';
    const height = isMobile ? `${lineHeight * 350}px` : `${lineHeight * 250}px`;

    return (
      <div>
        <div className="Timeline-line" style={{ height, background: lineColor }} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={5}>
              {left}
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon name={icon} size={iconSize} color={color} inverted circular style={{ margin: 'auto', boxShadow: `0 0 0 0.1em ${lineColor} inset` }} />
            </Grid.Column>
            <Grid.Column width={5}>
              {right}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Timeline.propTypes = {
  direction: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default Timeline;
