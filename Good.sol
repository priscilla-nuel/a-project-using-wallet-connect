// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // declare Solidity version

contract Good {
    uint256 private goodnum; // initialised to 0 if not set

    struct Person {
        uint256 goodnumA;
        string name;
    }

    // dynamic array
    Person[] public listofPeople;

    // mapping from name to number
    mapping(string => uint256) public nameTogoodnumber;

    // store a value
    function store(uint256 _goodnum) public {
        goodnum = _goodnum;
    }

    // retrieve the stored value
    function retrieve() public view returns (uint256) {
        return goodnum;
    }

    // add a person and update mapping
    function addPerson(string memory _name, uint256 _goodnumA) public {
        listofPeople.push(Person(_goodnumA, _name));
        nameTogoodnumber[_name] = _goodnumA;
    }
}
