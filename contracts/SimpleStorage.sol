// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStorage {
    uint256 public  myFavoriteNumber;

    function store(uint256 _value) public {
        myFavoriteNumber = _value;
    }

    function retrieve() public view returns (uint256) {
        return myFavoriteNumber;
    }
}
