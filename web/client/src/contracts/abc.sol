//SPDX-License-Identifier:MIT
pragma solidity >=0.5.0 <0.9.0;
contract Abc {
uint256 a;
//uint256 b;
function setter(uint256 _a) public{
a = _a;
}
function getter() public view returns(uint256){
return a;
}

}