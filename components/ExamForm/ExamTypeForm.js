function ExamTypeForm() {
  return (
    <div className={classes.choose}>
      <input
        type="radio"
        id="c-programming"
        name="exam_language"
        value="c-programming"
      />
      <label htmlFor="c-programming">C Programming</label>
      <br />
      <input
        type="radio"
        id="cpp-programming"
        name="exam_language"
        value="cpp-programming"
      />
      <label for="cpp-programming">C++ Programming</label>
      <br />
      <input
        type="radio"
        id="data-structures"
        name="exam_language"
        value="data-structures"
      />
      <label htmlFor="data-structures">Data Structures</label>
      <br />
      <input
        type="radio"
        id="algorithms"
        name="exam_language"
        value="algorithms"
      />
      <label htmlFor="algorithms">Algorithms</label>
      <br />
      <input type="radio" id="oop" name="exam_language" value="oop" />
      <label htmlFor="oop">OOP</label>
    </div>
  );
}
export default ExamTypeForm;
