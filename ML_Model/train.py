import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn import metrics

# Example dataset
data = pd.DataFrame({
    'text': ['What does AI stand for?', 'What is cloud computing?', 'What is data cleaning?'],
    'label': ['AI', 'CloudComputing', 'DataScience']
})

# Split data
X_train, X_test, y_train, y_test = train_test_split(data['text'], data['label'], test_size=0.3, random_state=42)

# Create a pipeline with TF-IDF and Naive Bayes
model = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model.fit(X_train, y_train)

# Predict on test data
y_pred = model.predict(X_test)

# Evaluate the model
print(metrics.classification_report(y_test, y_pred))
