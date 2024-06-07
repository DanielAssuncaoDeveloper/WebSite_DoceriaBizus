import styled from "styled-components";

export const SpinnerContainer = styled.div`
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  padding: 15px 0;
}

span {
    cursor: pointer;
}

.num-block {
	float: left;
	width: 100%;
  padding: 15px 30px;
}

/* skin 1 */
.skin-1 .num-in {
	float: left;
	width: 94px;}

.skin-1 .num-in span {
	display: block;
	float: left;
	width: 30px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	position: relative;
	cursor: pointer;
}

.skin-1 .num-in span.dis:before {
  background-color: #ccc !important;
}

.skin-1 .num-in input {
	float: left;
	width: 32px;
	height: 32px;
	border: 1px solid #6E6F7A;
	border-radius: 5px;
	color: #000;
	text-align: center;
	padding: 0;
}

.skin-1 .num-in span.minus:before {
	content: '';
	position: absolute;
	width: 15px;
	height: 2px;
	background-color: #00A94F;
	top: 50%;
	left: 0;
}

.skin-1 .num-in span.plus:before, .skin-1 .num-in span.plus:after {
	content: '';
	position: absolute;
	right: 0px;
	width: 15px;
	height: 2px;
	background-color: #00A94F;
	top: 50%;
}

.skin-1 .num-in span.plus:after {
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
}

/* / skin 1 */


/* skin 2 */
.skin-2 .num-in {
	background: #FFFFFF;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
	border-radius: 25px;
	height: 40px;
	width: 110px;
  float: left;
}

.skin-2 .num-in	span {
  width: 40%;
  display: block;
  height: 40px;
  float: left;
  position: relative;
}

.skin-2 .num-in span:before, .skin-2 .num-in span:after {
  content: '';
  position: absolute;
  background-color: #667780;
  height: 2px;
  width: 10px;
  top: 50%;
  left: 50%;
  margin-top: -1px;
  margin-left: -5px;
}

.skin-2 .num-in span.plus:after {
  transform: rotate(90deg);
}

.skin-2 .num-in input {
		float: left;
		width: 20%;
		height: 40px;
		border: none;
		text-align: center;
}

/* / skin 2 */

/* skin 3 */
.skin-3 .num-in span {
	display: block;
	float: left;
	width: 25px;
	height: 34px;
	position: relative;
	cursor: pointer;
}

.skin-3 .num-in span.minus:before {
	content: '';
	position: absolute;
	width: 10px;
	height: 2px;
	top: 50%;
	left: 50%;
	margin-left: -5px;
	margin-top: -1px;
	background-color: #000;
}

.skin-3 .num-in .in-num {
	float: left;
	width: 54px;
	height: 34px;
	border: 1px solid #CCCCCC;
	border-radius: 3px;
	text-align: center;
	font-size: 14px;
}

.skin-3 .num-in span.plus:before {
	content: '';
	position: absolute;
	width: 10px;
	height: 2px;
	top: 50%;
	left: 50%;
	margin-left: -5px;
	margin-top: -1px;
	background-color: #000;
}

.skin-3 .num-in span.plus:after {
	content: '';
	position: absolute;
	height: 10px;
	width: 2px;
	left: 50%;
	top: 50%;
	margin-top: -5px;
	margin-left: -1px;
	background-color: #000;
}

/* / skin 3 */

/* skin 4 */

.skin-4 .num-in {
	float: left;
	width: 80px;
	padding: 8px 0;
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
}

.skin-4 .in-num {
	width: 47px;
	float: left;
	height: 36px;
	font-size: 30px;
	text-align: center;
	outline: none;
}

.skin-4 .all-span {
	position: relative;
	float: right;
	width: 23px;
	height: 36px;
	border-left: 1px solid #000;
}

.skin-4 .all-span span {
	float: left;
	width: 100%;
	height: 18px;
	position: relative;
	cursor: pointer;
}

.skin-4 .all-span span:before {
	content: '';
	position: absolute;
	left: 50%;
	margin-left: -5px;
}

.skin-4 span.minus:before {
	top: 3px;
	border-top: 5px solid #000;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
}

.skin-4 span.minus.dis:before {
	opacity: 0.5;
}

.skin-4 span.plus:before {
	bottom: 3px;
	border-bottom: 5px solid #000;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;}

/* / skin 4 */

/* skin 5 */

.num-block.skin-5 {
}

.skin-5 .num-in {
  width: 88px;
  float: left;
	vertical-align: middle;
	position: relative;
	border: 1px solid #EEEFF1;
	border-radius: 3px;
}

.skin-5 .num-in:hover {
	border: 1px solid #4687FF;
	-webkit-box-shadow: 0px 0px 7px 0px rgba(70, 135, 255, 0.75);
	-moz-box-shadow:    0px 0px 7px 0px rgba(70, 135, 255, 0.75);
	box-shadow:         0px 0px 7px 0px rgba(70, 135, 255, 0.75);
}

.skin-5 .num-in span {
	font-size: 16px;
	width: 20px;
	display: block;
	line-height: 41px;
}

.skin-5 .num-in span.minus {
	float: left;
	text-align: right;
}

.skin-5 .num-in input {
  border: none;
	height: 41px;
	width: 46px;
	float: left;
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	-webkit-box-shadow: none !important;
	-moz-box-shadow: none !important;
	box-shadow: none !important;
}

.skin-5 .num-in span.plus {
	float: right;
	text-align: left;
}

/* / skin 5 */

/* skin 6 */

.skin-6 .num-in {
  background-color: #333;
	float: left;
	width: 120px;
	height: 45px;
	padding: 3px 0;
	border-radius: 5px;
}

.skin-6 .num-in span {
	display: block;
	float: left;
	width: 34px;
	line-height: 39px;
	height: 39px;
	color: #fff;
  font-weight: bold;
	text-align: center;
	cursor: pointer;
	-webkit-transition: all 0.3;
	-o-transition: all 0.3;
	transition: all 0.3;
}

.skin-6 .num-in span:hover {
	color: #fff !important;
}

.skin-6 .num-in input {
	float: left;
	height: 39px;
	width: 52px;
	border-radius: 5px;
	text-align: center;
}

/* / skin 6 */

/* skin 7 */

.skin-7 .num-in {
	float: left;
	width: 138px;
  border: 1px solid #a4a4a3;
}

.skin-7 input.in-num {
	font-family: 'HelveticaNeueCyr-Roman';
	font-size: 14px;
	float: left;
	height: 32px;
	width: 83px;
	border-left: 1px solid #a4a4a3;
	border-right: 1px solid #a4a4a3;
	background-color: #fff;
	text-align: center;
}

.skin-7 .num-in span  {
	font-size: 24px;
	text-align: center;
	display: block;
	width: 46px;
	float: left;
	height: 32px;
	background-color: #f4f4f6;
	cursor: pointer;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

.skin-7 .num-in span:hover {
	background-color: #d7d7d8;
}

.skin-7 .num-in input {
  border: none;
	float: left;
	width: 44px;
	line-height: 34px;
	text-align: center;
	font-family: 'helveticaneuecyrbold';
}

/* / skin 7 */



`