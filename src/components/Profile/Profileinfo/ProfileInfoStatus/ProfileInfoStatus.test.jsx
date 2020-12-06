import { create, findByType } from 'react-test-renderer'
import React, { Component } from 'react';
import ProfileInfoStatus from './ProfileInfoStatus';


describe('ProfileStatus ', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileInfoStatus status="test-status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test-status");
    });

/*     test('after creation span should be displayed with status', () => {
        const a = create(<ProfileInfoStatus status="test-status" />);
        const instance = a.findByType('span');
        expect(instance.length).toBe(1);
    }) */


});

