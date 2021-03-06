import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
import { List } from 'immutable';
import Voting  from '../../src/components/Voting';
import {expect} from 'chai';

describe('Voting', () => {

  it('invokes callback when a button is clicked', () => {
    const vote = sinon.spy();
    const wrapper = mount(
              <Voting pair={["Trainspotting", "28 Days Later"]}
              vote={vote}/>
            );
    wrapper.find('.btn_1').simulate('click');
    expect(vote).to.have.property('callCount', 1);
  });

  it('disables buttons when user has voted', () => {
    const wrapper = mount(
              <Voting pair={["Trainspotting", "28 Days Later"]} />
            );
    const buttons = wrapper.find('button');
    expect(buttons.length).to.equal(2)
  });

  it('adds label to the voted entry', () => {
    const wrapper = mount(
      <Voting pair={["Trainspotting", "28 Days Later"]}
              hasVoted="Trainspotting" />
    );
    const buttons = wrapper.find('button');
    expect(buttons.find('.btn_0').find('.label')).to.have.text('Voted')
  });

  it('renders just the winner when there is one', () => {
    const wrapper = mount(
      <Voting winner="Trainspotting" />
    );
    const buttons = wrapper.find('button');
    expect(buttons.length).to.equal(0);
    expect(wrapper.ref('winner').text()).to.contain('Trainspotting');
  });

  it('renders as a pure component', () => {
    const pair = ['Trainspotting', '28 Days Later'];
    let wrapper = mount(
      <Voting pair={pair} /> 
    );

    let firstButton = wrapper.find('button').first();
    expect(firstButton.text()).to.equal('Trainspotting');

    pair[0] = 'Sunshine';
    wrapper = mount(
      <Voting pair={pair} />
    );
    let first = wrapper.find('button').first();
    expect(first.text()).to.equal('Sunshine');
  });

  it('does update DOM when prop changes', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    let wrapper = mount(
      <Voting pair={pair} /> 
    );

    let firstButton = wrapper.find('button').first();
    expect(firstButton.text()).to.equal('Trainspotting');

    const newPair = pair.set(0, 'Sunshine');
    wrapper = mount(
      <Voting pair={newPair} /> 
    );
    let first = wrapper.find('button').first();
    expect(first.text()).to.equal('Sunshine');
  });
});