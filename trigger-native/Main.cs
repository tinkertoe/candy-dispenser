using Godot;
using System;
using System.Speech.Recognition;

public class Main : Node
{
	// Declare member variables here. Examples:
	// private int a = 2;
	// private string b = "text";

	// Called when the node enters the scene tree for the first time.
	private SpeechRecognizer recognizer = new SpeechRecognizer();
	public override void _Ready()
	{
			GD.Print("LOL");
	}

//  // Called every frame. 'delta' is the elapsed time since the previous frame.
//  public override void _Process(float delta)
//  {
//      
//  }
}
