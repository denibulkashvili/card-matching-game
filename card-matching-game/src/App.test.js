import React from "react"
import "./tests/setup"
import { shallow } from "enzyme"

import App from "./App"

describe('<App />', () => {
  it('shows title correctly', () => {
    const component = shallow(<App />);
    expect(component.find('.title').text()).toMatch(/Card Matching Game/);
  });

  it('starts with the isGameRunning equal false', () => {
    const component = shallow(<App />);
    const appState = component.state().isGameRunning
    expect(appState).toEqual(false);
  })
  
});

// @ponicode
describe("toggleGame", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggleGame()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("compareCards", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.compareCards([-1, 0.5, 1, 2, 3, 4, 5], 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.compareCards(["foo bar", -0.353, "**text**", 4653], 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.compareCards(["a", "b", "043", "holasenior"], 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.compareCards([10, -45.9, 103.5, 0.955674], 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.compareCards([-1, 0.5, 1, 2, 3, 4, 5], -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.compareCards([], Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addNotification", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.addNotification("string", "ValueError exception should be raised")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addNotification("array", "Error:")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addNotification("string", "Grader id does not match submission id that was passed in")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addNotification("object", "New Error ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addNotification("string", "Invalid Invitation Token.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addNotification(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleMatchedCards", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleMatchedCards()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleUnmatchedCards", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleUnmatchedCards()
        }
    
        expect(callFunction).not.toThrow()
    })
})
