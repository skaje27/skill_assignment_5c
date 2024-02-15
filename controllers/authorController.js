const authors = [];

const registerAuthor = async (req, res) => {
  const { author_id, author_name, author_email, author_password } = req.body;

  if (!author_id || !author_name || !author_email || !author_password) {
    return res.status(401).json({
      success: false,
      message: "No complete data provided",
    });
  }

  const newAuthor = {
    id: authors.length + 1,
    author_id,
    author_email,
    author_name,
    author_password,
  };

  authors.push(newAuthor);
  console.log(authors);

  return res.status(200).json({
    success: true,
    message: "New Author registerd successfully",
    data: newAuthor,
  });
};

const auhenticateAuthor = async (req, res) => {
  let flag = 0;
  const { author_email, author_password } = req.body;

  if (!author_email || !author_password) {
    return res.status(401).json({
      success: false,
      message: "No email and password provided",
    });
  }

  for (const author of authors) {
    if (
      author.author_email === author_email &&
      author.author_password === author_password
    ) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    return res.status(401).json({
      success: false,
      message: "Email and password didnt match",
    });
  }

  res.status(201).json({
    success: true,
    message: "Author authenticated successfully",
  });
};

module.exports = { registerAuthor, auhenticateAuthor };
