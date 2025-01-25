from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/motto')
def motto():
    return render_template('motto.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/classify')
def classify():
    return render_template('classify.html')

if __name__ == '__main__':
    app.run(debug=True)