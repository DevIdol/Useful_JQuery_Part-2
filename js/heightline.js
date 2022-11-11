$(document).ready(function () {
  /*Default
  ================
  */
  $(".card0>div").heightLine();
  $(".destroy").click(function () {
    $(".card0>div").heightLine("destroy");
  });
  /*Change Content
===================
*/
  $(".changeContent").click(function () {
    $(".card0>div").text(function () {
      return $(this).text() + $(this).text();
    });
  });
  /*Refresh
 ================
 */
  $(".refresh").click(function () {
    $(".card0>div").heightLine("refresh");
  });
  /*maxWidth:640
  ================
  */
  $(".card1>div").heightLine({
    maxWidth: 640,
  });
  /*minWidth:640
 ================
 */

  $(".card2>div").heightLine({
    minWidth: 640,
  });
  /*maxWidth:500 | minWidth:700
 =================================
 */

  $(".card3>div").heightLine({
    maxWidth: 700,
    minWidth: 500,
  });
  /*Font-size Change
  ====================
  */
  $(".card4>div").heightLine({
    fontSizeCheck: true,
  });
});
