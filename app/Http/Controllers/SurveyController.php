<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Survey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SurveyController extends Controller
{
    public function saveSurvey(Request $request)
    {
        try {
            $questions = $request->all();

            $survey = Survey::create();
            foreach ($questions as $question) {
                $answer = isset($question['subquestions']) ? json_encode($question['subquestions']) : $question['answer'];
                Answer::create([
                    'survey_id' => $survey->id,
                    'type' => $question['type'],
                    'question' => $question['text'],
                    'answer' => $question['type'] == 'checkbox' ? json_encode($answer) : $answer,
                ]);
            }
            return response()->json(['message' => 'Saved successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while saving'], 500);
        }
    }

    public function getAllSurveys()
    {
        $survey = new Survey();
        return $survey->getSurveys();
    }
}