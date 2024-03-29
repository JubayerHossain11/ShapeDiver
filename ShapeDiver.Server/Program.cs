using ShapeDiver.Server;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy("MyCorsPolicy", builder =>
        {
            builder.WithOrigins("*") // Add more origins if you need to
                   .AllowAnyMethod()
                   .AllowAnyHeader();
            // You can also use .AllowCredentials() if necessary
        });
    }
);

builder.Services.AddScoped<DatabaseHelper>(provider =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnectionString");
    return new DatabaseHelper(connectionString);
});

var app = builder.Build();



app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
app.UseCors("MyCorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
